import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Form,
  Row,
  Label,
  Input,
  Select,
  Textarea,
  ButtonRow,
  Button,
  ErrorSpan,
  SuccessMessage,
  SuccessTitle,
} from "./Register.styles";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { CustomContainer } from "../../components/Container/Container";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IFormInput, Profession } from "../../interfaces/interfaces";
import { CustomLink } from "../../components/CustomLink/CustomLink";
import axios from "axios";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup
      .number()
      .required()
      .positive()
      .integer("Shouldn't be empty")
      .min(13),
    date: yup
      .date()
      .required()
      .default(() => new Date()),
    profession: yup
      .mixed<Profession>()
      .required()
      .test((value) => Object.values(Profession).includes(value as Profession)),
    locality: yup.string().required(),
    guests: yup.number().positive().integer().required().min(0).max(2),
    address: yup.string().required().max(50),
  })
  .required();

export const Register: React.FC = () => {
  const [successScreen, setShowSuccessScreen] = useState<boolean>(false);
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: IFormInput) => {
    const response = await axios.post("https://rsvp-mock.free.beeceptor.com/register", data);
    if (response.data === 'Success') {
      setShowSuccessScreen(true);
    }
  };

  return (
    <CustomContainer>
      {successScreen ? (
        <SuccessMessage>
          <SuccessTitle>
            You have registered successfully. See you soon!
          </SuccessTitle>
          <CustomLink to="/participants" text="Participants" />
          <CustomLink to="/reports" text="More about event" />
          <CustomLink to="/" text="Back to Home" />
        </SuccessMessage>
      ) : (
        <>
          <h1>Fill the form below</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Label>Name</Label>
              <Input
                data-testid="name"
                {...register("name")}
              />
              <ErrorSpan>{errors.name?.message}</ErrorSpan>
            </Row>
            <Row>
              <Label>Age</Label>
              <Input data-testid="age" type="number" {...register("age")} />
              <ErrorSpan>{errors.age?.message}</ErrorSpan>
            </Row>
            <Row>
              <Label>Date of birth</Label>
              <Controller
                control={control}
                name="date"
                rules={{ required: true }} //optional
                render={({
                  field: { onChange, name, value },
                  fieldState: { invalid, isDirty },
                  formState: { errors },
                }) => (
                  <>
                    <DatePicker
                      value={value || ""}
                      onChange={(date: DateObject) => {
                        onChange(date?.isValid ? date : "");
                      }}
                      inputClass="date"
                      format="YYYY/MM/DD"
                    />
                  </>
                )}
              />
              <ErrorSpan>{errors.date?.message}</ErrorSpan>
            </Row>
            <Row>
              <Label>Profession</Label>
              <Select
                {...register("profession")}
                defaultValue={"DEFAULT"}
                data-testid="profession"
                onChange={(e) =>
                  setValue("profession", e.target.value as Profession, {
                    shouldValidate: true,
                  })
                }
              >
                <option disabled value="DEFAULT">
                  Select an option
                </option>
                <option value={Profession.Student}>Student</option>
                <option value={Profession.Employed}>Employed</option>
              </Select>
              <ErrorSpan>{errors.profession?.message}</ErrorSpan>
            </Row>
            <Row>
              <Label>Locality</Label>
              <Input data-testid="locality" {...register("locality")} />
              <ErrorSpan>{errors.locality?.message}</ErrorSpan>
            </Row>
            <Row>
              <Label>Number of guests</Label>
              <Input
                type="number"
                data-testid="guests"
                {...register("guests")}
                placeholder="Max. number is 2"
              />
              <ErrorSpan>{errors.guests?.message}</ErrorSpan>
            </Row>
            <Row>
              <Label>Address</Label>
              <Textarea
                data-testid="address"
                placeholder="Max. 50 characters"
                {...register("address")}
              />
              <ErrorSpan>{errors.address?.message}</ErrorSpan>
            </Row>
            <ButtonRow>
              <Button
                data-testid="submit"
                type="submit"
                disabled={!isDirty || !isValid}
              >
                Submit
              </Button>
            </ButtonRow>
          </Form>
        </>
      )}
    </CustomContainer>
  );
};

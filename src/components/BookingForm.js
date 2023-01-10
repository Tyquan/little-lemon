import { useState } from "react";
import { useFormik } from "formik";
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select
  } from "@chakra-ui/react";
import * as Yup from 'yup';
import { submitAPI } from "../api/api";
import { useNavigate } from "react-router-dom";

function BookingForm({ resDate, availableTimes, updateTimes, setResDate }) {
    const navigate = useNavigate();

    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState("");

    const formik = useFormik({
        initialValues: {
            resDate: resDate,
            availableTimes: availableTimes,
            guests: guests,
            occasion: occasion
        },
        onSubmit: (values) => {
            submitAPI(values);
            navigate('/confirm');
        },
        validationSchema: Yup.object({
            resDate: Yup.date().required("Required"),
            availableTimes: Yup.string().required("Required"),
            guests: Yup.number().min(1, "Must be 1 guest Minimum").required("Required"),
            occasion: Yup.string().required("Required"),
        }),
    });

    return (
        <article id="bookingFormComponent">
            <h1 id="reserve">Reserve A Table</h1>
            <form onSubmit={formik.handleSubmit}>
                <FormControl isInvalid={!!formik.errors.resDate && formik.touched.resDate}>
                    <FormLabel htmlFor="resDate">Choose A Date</FormLabel>
                    <input className="form-control" name="resDate" onChange={(e) => setResDate(e.target.value)} value={resDate} type="date" id="resDate" {...formik.getFieldProps("resDate")}/>
                    <FormErrorMessage>{formik.errors.resDate}</FormErrorMessage>
                </FormControl>
                <br />
                <FormControl isInvalid={!!formik.errors.availableTimes && formik.touched.availableTimes}>
                    <FormLabel htmlFor="availableTimes">Choose Time</FormLabel>
                    <Select className="form-control" value={availableTimes} id="res-time" name="availableTimes" onChange={(e) => updateTimes(e.target.value)} {...formik.getFieldProps("availableTimes")}>
                        <option value="">Choose a time...</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
                    </Select>
                    <FormErrorMessage>{formik.errors.availableTimes}</FormErrorMessage>
                </FormControl>
                <br />
                <FormControl isInvalid={!!formik.errors.guests && formik.touched.guests}>
                    <FormLabel htmlFor="guests">Guests</FormLabel>
                    <Input
                    id="guests"
                    name="guests"
                    {...formik.getFieldProps("guests")}
                    className="form-control"
                    />
                    <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                </FormControl>
                <br />
                <FormControl isInvalid={!!formik.errors.occasion && formik.touched.occasion}>
                    <FormLabel htmlFor="occasion">Occasion</FormLabel>
                    <Select className="form-control" value={occasion} id="occasion" name="occasion" onChange={(e) => setOccasion(e.target.value)} {...formik.getFieldProps("occasion")}>
                        <option value="">Choose an occasion...</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </Select>
                    <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                </FormControl>
                <br />
                <input type="submit" value="Reserve" id="makeReservationButton" />
            </form>
        </article>
    );
}

export default BookingForm;
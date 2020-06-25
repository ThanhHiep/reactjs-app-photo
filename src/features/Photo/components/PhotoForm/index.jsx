import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/globals';
import * as Yup from 'yup';
// import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/globals'
// import { PHOTO_CATEGORY_OPTIONS } from 'constants/globals';
// import Images from 'constants/images';


PhotoForm.propTypes = {

};

function PhotoForm(props) {
    const initialValue = {
        title: '',
        categoryId: null,
        photo: '',
    };
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required.'),

        categoryId: Yup.number()
            .required('This field is required.')
            .nullable(),

        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('this field is required.'),
            otherwise: Yup.string().notRequired(),
        })
    });
    return (
        <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={values => console.log('submit:', values)}
        >
            {formikProps => {
                const { values, errors, touched } = formikProps;
                console.log({ values, errors, touched });

                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        />

                        <FastField
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"
                        />

                        <FormGroup>
                            <Button type="submit" color="primary">
                                Add to album
                                </Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default PhotoForm;
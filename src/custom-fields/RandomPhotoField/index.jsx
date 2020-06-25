import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';

RandomPhotoField.propTypes = {
    form: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,

    label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
    label: '',
}

function RandomPhotoField(props) {
    const {
        form, field,
        label,
    } = props;
    const {
        value, onChange, onBlur, name
    } = field;

    // function handleImageUrlChange(newImageUrl) {
    //     form.setFieldValue(name, newImageUrl);
    // }
    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl)
    }
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
            />
        </FormGroup>
    );
}

export default RandomPhotoField;
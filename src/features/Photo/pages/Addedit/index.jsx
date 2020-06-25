import React from 'react';
import PropTypes from 'prop-types';
import './Addedit.scss'
// import PhotoForm from 'features/Photo/components/PhotoForm';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../components/PhotoForm';

Addedit.propTypes = {

};

function Addedit(props) {
    return (
        <div>
            <Banner
                title="Pick your amazing photo 😎"
            />
            <div className="photo-edit__form">
                <PhotoForm />
            </div>
        </div>
    );
}

export default Addedit;
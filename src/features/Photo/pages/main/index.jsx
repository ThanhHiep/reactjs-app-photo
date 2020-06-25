import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import Banner from 'components/Banner';
import Images from 'constants/images';
// import Images from 'constants/images';
// import Banner from '../../../../components/Banner';
// import Images from '../../../../constants/images';
// import Banner from 'components/Banner';

Main.propTypes = {

};

function Main(props) {
    return (
        <div>
            <Banner
                title="Your awesome photos 🎉"
                backgroundUrl={Images.PINK_BG}
            />
            <Container className="text-center">
                <div className="py-5">
                    <Link to="photos/add">
                        Add new photo
                    </Link>
                </div>
            </Container>

        </div>
    );
}

export default Main;
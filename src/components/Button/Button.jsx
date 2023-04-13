import { LoadMore } from './Button.styled'
import PropTypes from 'prop-types';

export const BtnLoadMore = ({ handlerClick }) => {
    return (
        <LoadMore type="button" onClick={handlerClick}>Load more</LoadMore>
    )
}




BtnLoadMore.propTypes = {
    handlerClick: PropTypes.func.isRequired,
};
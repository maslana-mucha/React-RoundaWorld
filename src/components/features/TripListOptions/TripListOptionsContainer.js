import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
  changeFromDuration,
  changeToDuration,
  addTag,
  removeTag,
} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeFromDuration: value => dispatch(changeFromDuration(value)),
  changeToDuration: value => dispatch(changeToDuration(value)),
  addTag: tag => dispatch(addTag(tag)),
  removeTag: tag => dispatch(removeTag(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);

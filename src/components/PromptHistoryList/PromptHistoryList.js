import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { useSelector } from 'react-redux'
import { List } from '@mui/material';
import PromptHistoryItem from '../PromptHistoryItem/PromptHistoryItem';
// import { addPrompt} from '../../actions/actions';

const PromptHistoryList = (props) => {
  const { promptsHistory, dispatch } = props;

  // const newPromptIsPending = state => state.prompt.isPending

  // const newPromptIsNotPending = useSelector(newPromptIsPending)

  // if (!newPromptIsNotPending) {
  //   console.log('YYY', props)
  //   dispatch(addPrompt)
  //   console.log('ZZZ', props)
  // }

  return (
    <List>
      {promptsHistory.length == 0
        ? 'No prompts here!'
        : promptsHistory.map((prompt) => {
            // console.log(prompt);
            return <PromptHistoryItem key={prompt.id} prompt={prompt} dispatch={dispatch} />;
          })}
    </List>
  );
};

PromptHistoryList.propTypes = {
  promptsHistory: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  promptsHistory: state.promptsHistory,
  newPrompt: state.prompt
});

export default connect(mapStateToProps)(PromptHistoryList);

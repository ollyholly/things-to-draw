import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from '@mui/material';
import PromptHistoryItem from '../PromptHistoryItem/PromptHistoryItem';

const PromptHistoryList = (props) => {
  const { prompts, dispatch } = props;

  return (
    <List>
      {prompts.length == 0
        ? 'No prompts here!'
        : prompts.map((prompt) => {
            console.log(prompt);
            return <PromptHistoryItem key={prompt.id} prompt={prompt} dispatch={dispatch} />;
          })}
    </List>
  );
};

PromptHistoryList.propTypes = {
  prompts: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  prompts: state.prompts
});

export default connect(mapStateToProps)(PromptHistoryList);

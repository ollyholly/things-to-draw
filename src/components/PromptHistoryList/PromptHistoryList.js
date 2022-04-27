import * as React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';

import PromptHistoryItem from '../PromptHistoryItem/PromptHistoryItem';
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  prompts: state.prompts
})



const PromptHistoryList = (props) => {
  // console.log(props)
  // eslint-disable-next-line react/prop-types
  const {  prompts, dispatch } = props;
  return (
    <List>
      {prompts.length == 0
        ? 'No prompts here!'
        : prompts.map((prompt) => {
            console.log(prompt);
            return (
              <PromptHistoryItem
                key={prompt.id}
                prompt={prompt}
                dispatch={dispatch}
              />
            );
          })}
    </List>
  );
};

PromptHistoryList.propTypes = {
  prompts: PropTypes.array
};

export default connect(mapStateToProps)(PromptHistoryList)

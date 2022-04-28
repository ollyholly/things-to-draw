import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { connect } from 'react-redux';
import { addPrompt, fetchPrompt} from '../actions/actions';
// import { v4 as uuidv4 } from 'uuid';

// const baseURL = 'http://localhost:3000/api/prompts/generate';

const PromptBox = (props) => {

  const useFetching = someFetchActionCreator => {
    useEffect( () => {
      someFetchActionCreator();
          console.log('HERE', props);

    }, [])
  }
 
  useFetching(props.fetchPrompt);


  const selectNoun = state => state.prompt.noun
  const selectAdjective = state => state.prompt.adjective
  const selectVerb = state => state.prompt.verb

  const noun = useSelector(selectNoun)
  const adjective = useSelector(selectAdjective)
  const verb = useSelector(selectVerb)

  // useEffect(async () => {
  //   // await getNewPrompt();
  //   fetchPrompt()
  //   console.log('HERE', props);
  // }, [fetchPrompt]);

  // const handleAdjectiveChange = (event) => {
  //   setAdjective(event.target.value);
  // };
  // const handleNounChange = (event) => {
  //   setNoun(event.target.value);
  // };
  // const handleVerbChange = (event) => {
  //   setVerb(event.target.value);
  // };

  const { fetchPrompt } = props;
  // const { gameMode, fetchPrompt, addPrompt } = props;

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '23ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="adjective"
        variant="standard"
        value={!adjective ? '' : adjective}
        // onChange={() => addPrompt({
        //   text: prompt,
        //   id: uuidv4(),
        //   gameMode: gameMode
        // })}
      />
      <TextField id="noun" variant="standard" value={!noun ? '' : noun} 
      // onChange={handleNounChange} 
      />
      <TextField id="verb" variant="standard" value={!verb ? '' : verb}  />
      <Button
        variant="contained"
        onClick={() => fetchPrompt()}
        // onClick={async () => {
        //   await dispatch(fetchPrompt())
        //   // const prompt = await getNewPrompt();
        //     addPrompt({
        //       text: prompt,
        //       id: uuidv4(),
        //       gameMode: gameMode
        //     })
        // }}
      >
        Get prompt
      </Button>
    </Box>
  );
};

PromptBox.propTypes = {
  gameMode: PropTypes.string.isRequired,
  prompt: PropTypes.object.isRequired,
  fetchPrompt: PropTypes.func.isRequired,
  addPrompt: PropTypes.func.isRequired,
  onClickAction: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
  gameMode: state.gameMode,
  prompt: state.prompt
});

// const actionCreator =  (payload) => async (dispatch)=> {
//   await dispatch(fetchPrompt())
//   console.log('XXXX', payload)
//     // if (payload.prompt) {
//       dispatch(addPrompt(payload))
//     // }
// }
        

const mapDispatchToProps = (dispatch) => {
  return {
    addPrompt: (prompt) => dispatch(addPrompt(prompt)),
    fetchPrompt:  () =>  dispatch(fetchPrompt()),
    // onClickAction: (prompt) => dispatch(actionCreator(prompt))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PromptBox);

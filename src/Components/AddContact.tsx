import React from 'react';

import Plus from '../../resources/plus.png';
import Question from '../CommonComponents/Question';
import { STRINGS } from '../Constants/Strings';
import Data from '../data';

function AddContact() {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.row, alignItems: 'center' }}>
        <img src={Plus} style={styles.plusSignIcon} alt="Plus-sign" />
        <div style={styles.textContainer}>
          <p style={{ ...styles.titleText, ...styles.subTitleText }}>
            {STRINGS.buildANewContactCard}
          </p>
          <p>{STRINGS.addNewContact}</p>
        </div>
      </div>
      <p style={{ ...styles.titleText }}>{STRINGS.moreAboutYourConnection}</p>
      {Data.map((item, index) => {
        return (
          <Question
            containerStyle={styles.question}
            key={index}
            question={item.question}
            type={item.type}
            options={(item?.options && item.options) || []}
          />
        );
      })}
      <input
        style={styles.submitButton}
        type="button"
        value="Submit"
        onClick={() => {}}
      />
    </div>
  );
}

const styles = {
  container: {
    margin: '1%',
    padding: '1%',
    // backgroundColor: 'lightGrey',
    borderRadius: 50,
    textAlign: 'left',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  plusSignIcon: {
    width: '2.5rem',
    height: '2.5rem',
  },
  row: {
    display: 'flex',
    gap: 10,
    justifyContent: 'left',
  },
  textContainer: { justifyContent: 'left' },
  titleText: { fontWeight: 700 },
  subTitleText: { marginBottom: -20 },
  question: { marginBottom: '2%', padding: '2%' },
  submitButton: { padding: '1%', fontWeight: 700, borderRadius: 10 },
};

export default AddContact;

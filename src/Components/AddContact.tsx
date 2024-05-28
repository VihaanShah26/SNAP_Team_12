import React, { useState } from 'react';

import Plus from '../../resources/plus.png';
import Question from '../CommonComponents/Question';
import { ContactCard } from '../Constants/DatabaseIterface';
import { STRINGS } from '../Constants/Strings';
import Data from '../data';

function AddContact() {
  const [contactInformation, setContactInformation] = useState<ContactCard>({
    id: -1,
    contact_name: '',
    username: '',
    relationship: '',
    meet: '',
    spend_time: '',
    current_interests: [],
    communication_frequency: '',
    helps_me: '',
    friends: [],
    closest_city: '',
    closest_friend1: '',
    closest_friend3: '',
    closest_friend2: '',
  });

  const validation = () => {
    if (
      contactInformation.contact_name.length > 0 &&
      contactInformation.username.length > 0 &&
      contactInformation.relationship.length > 0
    )
      return true;
    return false;
  };

  const clearFields = () => {
    setContactInformation({
      id: -1,
      contact_name: '',
      username: '',
      relationship: '',
      meet: '',
      spend_time: '',
      current_interests: [],
      communication_frequency: '',
      helps_me: '',
      friends: [],
      closest_city: '',
      closest_friend1: '',
      closest_friend3: '',
      closest_friend2: '',
    });
  };

  const onSubmit = async () => {
    if (validation()) {
      const commaSeperatedInterests = contactInformation.current_interests.join(',');
      const modifiedContactCard = {
        ...contactInformation,
        contact_name: contactInformation.contact_name[0],
        username: contactInformation.username[0],
        current_interests: commaSeperatedInterests,
        closest_friend1: contactInformation?.friends[0] || '',
        closest_friend2: contactInformation?.friends[1] || '',
        closest_friend3: contactInformation?.friends[2] || '',
      };
      const strigified = JSON.stringify(modifiedContactCard);
      await fetch('/api/addContact', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: strigified,
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      alert('Data has been submitted!');
      clearFields();
    } else {
      alert('Please enter the required fields.');
    }
  };

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
            databaseColumn={item.databaseColumn}
            contactInformation={contactInformation}
            setContactInformation={setContactInformation}
            multiSelectForDropdown={item.multiselect || false}
            isRequired={(item?.isRequired && true) || false}
          />
        );
      })}
      <input
        style={styles.submitButton}
        type="button"
        value="Submit"
        onClick={onSubmit}
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

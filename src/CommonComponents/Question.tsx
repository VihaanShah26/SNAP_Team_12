import React, { useEffect, useState } from 'react';
import Select from 'react-dropdown-select';

import { ContactCard } from '../Constants/DatabaseIterface';

export const typeOptions = {
  checkbox: 'checkbox',
  radio: 'radio',
  text: 'text',
  dropdown: 'dropdown',
};
type types = keyof typeof typeOptions;

interface Props {
  question: string;
  type: types;
  options?: string[];
  containerStyle?: React.CSSProperties;
  contactInformation: ContactCard;
  setContactInformation: React.Dispatch<React.SetStateAction<ContactCard>>;
  databaseColumn: string;
  multiSelectForDropdown?: boolean;
}

const renderOptions = (
  options: string[] | undefined,
  type: string,
  question: string,
  contactInformation: ContactCard,
  setContactInformation: React.Dispatch<React.SetStateAction<ContactCard>>,
  databaseColumn: string,
  multiSelectForDropdown: boolean = false,
) => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    return await fetch('/api/getDistinctNames')
      .then((res) => res.json())
      .then((res) => {
        const nameArray = res.map((item) => {
          return { label: item.value, value: item.value };
        });
        setNames(nameArray);
      });
  };

  switch (type) {
    case typeOptions.checkbox:
      return (
        <div style={style.optionButton}>
          {options?.length &&
            options.map((item, index) => {
              const isChecked = contactInformation[databaseColumn]?.indexOf(item) >= 0;
              return (
                <label key={index}>
                  <input
                    type="checkbox"
                    name={item}
                    value={item}
                    key={index}
                    checked={isChecked}
                    onChange={(value) => {
                      if (contactInformation[databaseColumn]?.indexOf(item) === -1) {
                        const newContact = {
                          ...contactInformation,
                          [databaseColumn]: [
                            ...contactInformation[databaseColumn],
                            value.target.value,
                          ],
                        };
                        setContactInformation(newContact);
                      } else {
                        const index = contactInformation[databaseColumn].indexOf(item);
                        const array = contactInformation[databaseColumn];
                        array.splice(index, 1);
                        const newContact = {
                          ...contactInformation,
                          [databaseColumn]: array,
                        };
                        setContactInformation(newContact);
                      }
                    }}
                  />
                  {item}
                </label>
              );
            })}
        </div>
      );
    case typeOptions.radio:
      return (
        <div style={style.optionButton}>
          {options?.length &&
            options.map((item, index) => {
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name={question}
                    value={item}
                    key={index}
                    onChange={(event) => {
                      const newData = {
                        ...contactInformation,
                        [databaseColumn]: event.target.value,
                      };
                      setContactInformation(newData);
                    }}
                  />
                  {item}
                </label>
              );
            })}
        </div>
      );
    case typeOptions.text:
      return <input style={style.inputStyle} />;
    case typeOptions.dropdown:
      return (
        <Select
          options={names}
          onChange={(values) => {
            const onlyKeys = values.map((value) => value.value);
            const updatedValues = { ...contactInformation, [databaseColumn]: onlyKeys };
            setContactInformation(updatedValues);
          }}
          values={[...contactInformation[databaseColumn]]} // these are the selected values
          multi={multiSelectForDropdown}
          searchable
          create
          clearable
          keepSelectedInList={false}
        />
      );
    default:
      'we are using default';
  }
};

function Question(props: Props) {
  const {
    type,
    options,
    question,
    containerStyle,
    contactInformation,
    setContactInformation,
    databaseColumn,
    multiSelectForDropdown,
  } = props;
  return (
    <div style={{ ...style.container, ...containerStyle }}>
      <p style={style.question}>{question}</p>
      {renderOptions(
        options,
        type,
        question,
        contactInformation,
        setContactInformation,
        databaseColumn,
        multiSelectForDropdown,
      )}
    </div>
  );
}

const style = {
  container: {
    backgroundColor: 'lightGrey',
    padding: '1%',
    borderRadius: 20,
  },
  question: {
    margin: 0,
    fontWeight: 700,
    marginBottom: '1%',
  },
  inputStyle: {
    border: 'none',
    borderRadius: 20,
    padding: '0.5%',
    marginTop: '0.5rem',
    width: '98%',
  },
  optionButton: { display: 'flex', flexWrap: 'wrap', gap: 4 },
};

export default Question;

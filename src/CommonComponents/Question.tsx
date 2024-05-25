import React from 'react';
import Select from 'react-dropdown-select';

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
}

const renderOptions = (options: string[] | undefined, type: string, question: string) => {
  switch (type) {
    case typeOptions.checkbox:
      return (
        <div style={style.optionButton}>
          {options?.length &&
            options.map((item, index) => {
              return (
                <label key={index}>
                  <input type="checkbox" name={question} value={question} key={index} />
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
                  <input type="radio" name={question} value={question} key={index} />
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
          options={[
            { value: 1, label: 'Leanee' },
            { value: 2, label: 'how are you?' },
          ]}
          onChange={(values) => console.log(values)}
          values={[]} // these are the selected values
          multi={true}
          searchable
        />
      );
    default:
      'we are using default';
  }
};

function Question(props: Props) {
  const { type, options, question, containerStyle } = props;
  return (
    <div style={{ ...style.container, ...containerStyle }}>
      <p style={style.question}>{question}</p>
      {renderOptions(options, type, question)}
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

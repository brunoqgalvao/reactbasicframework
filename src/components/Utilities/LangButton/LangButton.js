import React from 'react'
import ReactFlagsSelect from 'react-flags-select';
import { useLang } from '../../../states/LangState';
import 'react-flags-select/css/react-flags-select.css';
import 'react-flags-select/scss/react-flags-select.scss';
 

const LangButton = () => {

  const { lang, setLang } = useLang();

  const onSelectFlag = (flag) => {
    setLang(flag.toLowerCase());
  }

  return (
    <div>
      <ReactFlagsSelect
      defaultCountry={lang.toUpperCase()}
      countries={["US", "BR"]}
      customLabels={{"US": "en","BR": "pt"}}
      showSelectedLabel={false} 
      showOptionLabel={false} 
      selectedSize={14}
      optionsSize={14}
      className="menu-flags"
      onSelect={onSelectFlag}
      />
    </div>
  )
}

export default LangButton

import React from 'react'
import ClassDropDown from './classDropDown'
import AcademicYear from './academicYear'
import LanguageButton from './languageButton'
import NotificationDropdown from './notificationDropdown'
import DatePicker from './datePicker'

const TopBar = () => {
  return (
    <div className="flex w-full items-center justify-between py-4 border-b border-border">
          <ClassDropDown/>
          <div className="flex items-center gap-4">
            <AcademicYear/>
            <DatePicker/>
            <LanguageButton/>
            <NotificationDropdown/>
          </div>
    </div>
  )
}

export default TopBar
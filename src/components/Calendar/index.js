import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/es';

import { withAuthentication } from '../Session';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';

import CalendarBody from './CalendarBody';
import CalendarHead from './CalendarHead';

// import AddActivity from '../AddActivity';
// import EditActivity from '../EditActivity';
// import ActivityList from '../ActivityList';

function Calendar(props) {

    const {firebase, authUser} = props;

    let defaultSelectedDay = {
        day: moment().format("D"),
        month: moment().month()
    };
    /*** HOOKS ***/
    const [dateObject, setdateObject] = useState(moment());
    const [showMonthTable, setShowMonthTable] = useState(false);
    const [selectedDay, setSelected] = useState(defaultSelectedDay);
    // Later add hook for active days from database

    /*** CALENDAR HEAD ***/
    const allMonths = moment.months();
    const currentMonth = () => dateObject.format("MMMM");
    const currentYear = () => dateObject.format("YYYY");

    const setMonth = month => {
        let monthNo = allMonths.indexOf(month);
        let newDateObject = Object.assign({}, dateObject);
        newDateObject = moment(dateObject).set("month", monthNo);
        setdateObject(newDateObject);
        setShowMonthTable(false);
    }

    const toggleMonthSelect = () => setShowMonthTable(!showMonthTable);

    /*** CALENDAR BODY ***/
    const setSelectedDay = day => {
        setSelected({
                day,
                month: currentMonthNum()
        });
         // Later refresh data
    };

    const currentMonthNum = () => dateObject.month();
    const daysInMonth = () => dateObject.daysInMonth();
    const currentDay = () => dateObject.format("D");
    const actualMonth = () => moment().format("MMMM");

    const firstDayOfMonth = () => moment(dateObject).startOf("month").format("d");



    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                    <CalendarHead
                        allMonths={allMonths}
                        currentMonth={currentMonth}
                        currentYear={currentYear}
                        setMonth={setMonth}
                        showMonthTable={showMonthTable}
                        toggleMonthSelect={toggleMonthSelect}
                    />
                    <CalendarBody 
                        firstDayOfMonth={firstDayOfMonth}
                        daysInMonth={daysInMonth}
                        currentDay={currentDay}
                        currentMonth={currentMonth}
                        currentMonthNum={currentMonthNum}
                        actualMonth={actualMonth}
                        setSelectedDay={setSelectedDay}
                        selectedDay={selectedDay}
                        weekdays={moment.weekdays()} 
                    />
            </Grid>
        </Grid>
    )
};

export default withAuthentication(Calendar);
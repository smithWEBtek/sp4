
## Granular Scheduling rules:
Dropdown start and end for choosing available datetimes.
Dropdown multi-select lists show appt time slots for every 30 min by default
	Future Feature: every 15 min
	Future Feature: custom time slots
	Future Feature: custom default appt duration
	Future Feature: custom default appt time buffer before and after appt

Choices are saved in local state & passed as props on submit
onSubmit, the local state is sent to API to update DB 




## Calendar
1. Calendar receives array of available datetimes
2. Calendar uses CSS to display available datetimes, all others disabled / 'grayed out'
3. Each available datetime is a button to populate state  this.setState({ appt_choice })
4. appt_choice becomes another attribute in local state, which is ultimately sent to action to create appt 

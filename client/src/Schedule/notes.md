
## Scheduling rules:
1. Dropdown start and end for available datetimes.
2. Choices are saved in local state.
3. onSubmit, the local state is sent to API to update DB 




## Calendar
1. Calendar receives array of available datetimes
2. Calendar uses CSS to display available datetimes, all others disabled / 'grayed out'
3. Each available datetime is a button to populate state  this.setState({ appt_choice })
4. appt_choice becomes another attribute in local state, which is ultimately sent to action to create appt 

import React, { Component } from 'react'; 
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class DateTimePicker extends Component 
{
    constructor(props) {
        super(props);

        let initDate = new Date();
        if (this.props.zuluDate)
        {
            initDate = new Date(this.props.zuluDate);
        }

        this.state = {
            zuluDate: this.props.zuluDate,
            startDate: initDate
        }

        this.handleDateSelect = this.handleDateSelect.bind(this)
    }

    handleDateSelect = (dt) => {
        this.setState({zuluDate: dt.toISOString(), startDate: dt});  //need to set zuluDate to make sure this.props.zuluDate updates properly
        this.props.onSelectDate(dt);
    }

    render() {
        let thisDate = this.state.startDate  
        if (this.props.zuluDate)
        {
            thisDate = new Date(this.props.zuluDate)
        }

        return (
            <div>
                <DatePicker
                    onChange={this.handleDateSelect}
                    onSelect={this.handleDateSelect}
                    selected={thisDate}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
            </div>
        )
    }

}

export default DateTimePicker
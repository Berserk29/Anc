import { TableType } from "../component/table/table.component"
// import {createPaymentDocument}

// The media query was !isMobile
export const tableTypeChoice = (type, mediaQuery) => {
    if(type === 'heading') return mediaQuery ? TableType.heading : TableType.small_heading
    if(type === 'fixed') return mediaQuery ? TableType.fixed : TableType.small_fixed
    if(type === 'labelHeading') return mediaQuery ? TableType.label_heading : TableType.small_label_heading
}

export const handleChange = (setForm, form, event, taxLogic = false) => {
    const {id, value} = event.target;
    setForm({...form, [id]: value});
    if(!taxLogic) return;
    if(id === 'province') taxLogic(value)
}

export const cardHandler = (form) => {
    const isSomeCardEmpty = Object.values(form).some((el) => el.trim() === '');
    if(isSomeCardEmpty) throw new Error('Some input field are empty')

    const {month, year, security} = form;
    const inputDay = new Date(`${year}-${ month }-01`).getTime();
    const today = new Date().getTime() - (1000 * 60 * 60 * 24 * 30);

    if(today > inputDay) throw new Error('Your card is expirated')
    if(security.match(/[A-z]/) || security.length < 3 || security.length > 4) throw new Error('CVV Validation Error')
}

export const addressHandler = (form, phone) => {
    const isSomeAdressEmpty = Object.values(form).some((el) => el.trim() === '');
        if(isSomeAdressEmpty) throw new Error('Some input field are empty')

        const {phoneNumber} = form
        const resultPhone = phone(phoneNumber, {country: 'Canada'})
        if(phoneNumber.trim().match(/[^0-9/()+//-]/) || phoneNumber.length < 8 || !resultPhone.isValid) throw new Error('Invalid phone number')
        
}

export const submitHandler = (event, setSuccess, setError , form , isAddressHandler = false, phone) => {
    event.preventDefault();
    setSuccess(false)
    try {
        if(isAddressHandler) {
            addressHandler(form, phone)
        } else {
            cardHandler(form)
        }
    } catch (err) {
        setError(err.message)
        return;
    }
    setError(false)
    setSuccess(true)
}
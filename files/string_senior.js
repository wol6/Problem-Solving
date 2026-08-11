
const details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"]

function printTicket(details) {
    const seniors_passenger = []
    const passenger = []

    for (let detail of details) {
        
        const match = detail.match(/^(\d{10})([MF])(\d{2})(\d+)/)
        const [_,ph,gender,age,seat] = match
        if(age>='60'){
            seniors_passenger.push({ph,gender,age,seat})
        }else{
            passenger.push({ph,gender,age,seat})
        }
    }
   return {passenger,seniors_passenger}
}

console.log(printTicket(details))
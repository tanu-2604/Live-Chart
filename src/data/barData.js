
export const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'State transitions for category FailedWhileCharging',
    },
  },
};




   // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const barData={

    "2022-11-27": {

        "Success": 300,

        "Failure": 71,

        "SuccessPercetage": 80

    },

    "2022-10-23": {

        "Success": 169,

        "Failure": 64,

        "SuccessPercetage": 72

    },

    "2022-11-13": {

        "Success": 303,

        "Failure": 65,

        "SuccessPercetage": 82

    },

    "2022-12-04": {

        "Success": 249,

        "Failure": 104,

        "SuccessPercetage": 70

    },

    "2022-10-02": {

        "Success": 162,

        "Failure": 49,

        "SuccessPercetage": 76

    },

    "2022-10-16": {

        "Success": 125,

        "Failure": 44,

        "SuccessPercetage": 73

    },

    "2022-11-06": {

        "Success": 290,

        "Failure": 61,

        "SuccessPercetage": 82

    },

    "2022-10-09": {

        "Success": 107,

        "Failure": 78,

        "SuccessPercetage": 57

    },

    "2022-10-30": {

        "Success": 234,

        "Failure": 49,

        "SuccessPercetage": 82

    },

    "2022-11-20": {

        "Success": 252,

        "Failure": 47,

        "SuccessPercetage": 84

    },

    "2022-12-11": {

        "Success": 7,

        "Failure": 7,

        "SuccessPercetage": 50

    }

}
 


export const barStyle ={
    chartType:"bar",
      width:"95%",
      height:"400px"
}
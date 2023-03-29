// export const assignment = [
//     {
//         patient:1,
//         doctor:1,
//         item:{
//             type:"Activity",
//             admin:{
//                 adminId:1
//             },
        
//             activity:{
//             name:"Depression",
//             description:"Questionnare exercise to learn about description"
//         },
//         },
//         itemLevel:1
//     },
//     {
//         patient:1,
//         doctor:1,
//         item:{
//             type:"Activity",
//             admin:{
//                 adminId:1
//             },
        
//             activity:{
//             name:"Anxiety",
//             description:"Questionnare exercise to learn about Anxiety"
//         },
//         },
//         itemLevel:2
//     },
//     {
//         patient:1,
//         doctor:1,
//         item:{
//             type:"Activity",
//             admin:{
//                 adminId:1
//             },
        
//             activity:{
//             name:"Suicidal Thoghts",
//             description:"Questionnare exercise to learn how to counter suicidal thoughts"
//         },
//         },
//         itemLevel:1
//     },
// ]



export const assignments = {
    "success": true,
    "message": "",
    "response": [
        {
            "assignmentId": 9,
            "itemLevel": 1,
            "patient": {
                "patientId": 3,
                "medicalHistory": {
                    "id": 3,
                    "height": 170,
                    "weight": 70,
                    "drinksAlcohol": false,
                    "diseases": "No disease",
                    "smoker": false
                },
                "doctor": {
                    "doctorId": 2,
                    "admin": {
                        "adminId": 1
                    },
                    "doctorDetails": {
                        "doctorDetailsId": 2,
                        "qualification": "MBBS",
                        "specialization": "Psychiatry",
                        "experienceInYears": 10
                    }
                },
                "wantsDoc": false,
                "joiningDate": "28/03/2023"
            },
            "doctor": {
                "doctorId": 2,
                "admin": {
                    "adminId": 1
                },
                "doctorDetails": {
                    "doctorDetailsId": 2,
                    "qualification": "MBBS",
                    "specialization": "Psychiatry",
                    "experienceInYears": 10
                }
            },
            "item": {
                "itemId": 6,
                "type": "Activity",
                "admin": {
                    "adminId": 1
                },
                "activity": {
                    "activityId": 6,
                    "name": "Self Evaluation : Anxiety",
                    "description": "Questionnaire exercise to evaluate traits of anxiety."
                }
            }
        },
        {
            "assignmentId": 10,
            "itemLevel": 1,
            "patient": {
                "patientId": 3,
                "medicalHistory": {
                    "id": 3,
                    "height": 170,
                    "weight": 70,
                    "drinksAlcohol": false,
                    "diseases": "No disease",
                    "smoker": false
                },
                "doctor": {
                    "doctorId": 2,
                    "admin": {
                        "adminId": 1
                    },
                    "doctorDetails": {
                        "doctorDetailsId": 2,
                        "qualification": "MBBS",
                        "specialization": "Psychiatry",
                        "experienceInYears": 10
                    }
                },
                "wantsDoc": false,
                "joiningDate": "28/03/2023"
            },
            "doctor": {
                "doctorId": 2,
                "admin": {
                    "adminId": 1
                },
                "doctorDetails": {
                    "doctorDetailsId": 2,
                    "qualification": "MBBS",
                    "specialization": "Psychiatry",
                    "experienceInYears": 10
                }
            },
            "item": {
                "itemId": 7,
                "type": "Activity",
                "admin": {
                    "adminId": 1
                },
                "activity": {
                    "activityId": 7,
                    "name": "Sleeping Habits",
                    "description": "Questionnaire exercise to evaluate sleeping habits"
                }
            }
        },
        {
            "assignmentId": 11,
            "itemLevel": 2,
            "patient": {
                "patientId": 3,
                "medicalHistory": {
                    "id": 3,
                    "height": 170,
                    "weight": 70,
                    "drinksAlcohol": false,
                    "diseases": "No disease",
                    "smoker": false
                },
                "doctor": {
                    "doctorId": 2,
                    "admin": {
                        "adminId": 1
                    },
                    "doctorDetails": {
                        "doctorDetailsId": 2,
                        "qualification": "MBBS",
                        "specialization": "Psychiatry",
                        "experienceInYears": 10
                    }
                },
                "wantsDoc": false,
                "joiningDate": "28/03/2023"
            },
            "doctor": {
                "doctorId": 2,
                "admin": {
                    "adminId": 1
                },
                "doctorDetails": {
                    "doctorDetailsId": 2,
                    "qualification": "MBBS",
                    "specialization": "Psychiatry",
                    "experienceInYears": 10
                }
            },
            "item": {
                "itemId": 8,
                "type": "Activity",
                "admin": {
                    "adminId": 1
                },
                "activity": {
                    "activityId": 8,
                    "name": "Depression",
                    "description": "Questionnaire exercise to learn about depression"
                }
            }
        }
    ]
}
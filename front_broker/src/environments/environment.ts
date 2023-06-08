export const environment = {
    production: false,
    recaptcha: {
        siteKey: "6LdoQKAjAAAAAIJ_35OG7homkj0CByKee9oFf0K1"
    },
    auth: {
        validateBroker: {
            url: "/mocks/vivienda/broker/",
            //url: "http://10.122.7.10:8080/SrvIntHomeCreditDigital/auth/broker", 
            needJwt: false
        }
    },
    access: {
        validate: {
            url: "/mocks/vivienda/validation/",
            //url: "http://10.122.7.10:8080/SrvIntHomeCreditDigital/auth/broker/validation", 
            needJwt: true
        }
    },
    supportService: {
        url: "/mocks/support/?param=",
        //url: "http://10.122.7.10:8080/SrvIntSupportServices/domain/",
        needJwt: false,
        resources: {
            years: {
                path: "CVD_PeriodOfYears"
            }, 
            propertyType: {
                path: "CVD_PropertyType"
            }, 
            countries: {
                path: "Paises"
            },
            cities: {
                path: "Ciudades"
            },
            genders: {
                path: "Sexo"
            }, 
            documentType: {
                path: "CVD_DocumentType"
            }, 
            numberDependents: {
                path: "CVD_NumberDependents"
            }, 
            civilStatus: {
                path: "CVD_CivilStatus"
            },
            timeResidenceAbroad: {
                path: "CVD_TimeResidenceAbroad"
            }, 
            levelStudies: {
                path: "CVD_Studies"
            }, 
            residenceType:{
                path: "CVD_ResidenceType"
            }, 
            ocupations: {
                path: "Ocupacion"
            }, 
            contractType: {
                path: "TipoContrato"
            }, 
            antiquity: {
                path: "CVD_Antiquity"
            }, 
            operationType: {
                path: "CVD_OperationType"
            }, 
            referenceType: {
                path: "TiposReferencia"
            }, 
            relationshipType: {
                path: "CVD_RelationshipType"
            }

        }
    },
    creditApplication: {
        resource: {
            url: "/mocks/vivienda/credit-application/",
            // url: "http://10.122.7.10:8080/SrvIntHomeCreditDigital/auth/broker/validation", 
            needJwt: true
        }
    }
}
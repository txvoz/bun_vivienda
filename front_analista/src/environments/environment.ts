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
        url: "/mocks/support/?x=",
        //url: "http://10.122.7.10:8080/SrvIntSupportServices/domain/",
        needJwt: false,
        resources:  {
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
    creditList: {
        //url: "http://10.122.7.10:8080/SrvIntHomeCreditDigital/listcredit/"
        basePath: "/mocks/vivienda/listcredit/",
        resource: {
            list: {
                path: "?page={page}&size={size}"
            }, 
            filterByDate: {
                path: "between?from={from}&to={to}&page={page}&size={size}"
            }, 
            filterByDNI : {
                path: "dni/{dni}?page={page}&size={size}"
            },
            filterByStatus : {
                path: "status?name={status}&page={page}&size={size}"
            },
            filterById : {
                path: "{id}/request"
            },
        }
    },
    creditDetail: {
        get: {
            url: "/mocks/vivienda/credit-detail/?id={id}",
            //url: "http://10.122.7.10:8080/SrvIntHomeCreditDigital/managment/request/{id}", 
            needJwt: true
        }
    },
    creditRequest: {
        get: {
            url: "/mocks/vivienda/credit-request/?id={id}",
            //url: "http://10.122.7.10:8080/SrvIntHomeCreditDigital/managment/request/{id}", 
            needJwt: true
        }, 
        update: {
            url: "/mocks/vivienda/credit-request/?id={id}",
            //url: "http://10.122.7.10:8080/SrvIntHomeCreditDigital/managment/request/{id}", 
            needJwt: true
        }
    },
    creditApplication: {
        resource: {
            url: "/mocks/vivienda/credit-application/",
            // url: "http://10.122.7.10:8080/SrvIntHomeCreditDigital/auth/broker/validation", 
            needJwt: true
        }
    },
    interview: {
        send: {
            url: "/mocks/vivienda/interview/?id={id}",
            //url: "http://10.122.7.10:8080/SrvIntHomeCreditDigital/interview/customer/{id}", 
            needJwt: true
        }
    },
    signature: {
        send: {
            url: "/mocks/vivienda/signature/?id={id}",
            //url: "http://10.122.7.10:8080/SrvIntHomeCreditDigital/signature/request/{id}", 
            needJwt: true
        }
    },
}
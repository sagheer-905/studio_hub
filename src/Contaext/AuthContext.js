import { createContext, useContext, useState } from "react";
export const Authdata = createContext();
export const Authprovider = ({ children }) => {
    const [data, setdata] = useState()
    const [homepage, sethomepage] = useState()
    const [aboutpage, setaboutpage] = useState()
    const [contactpage, setcontactpage] = useState()
    const [servicespage, setservicespage] = useState()
    const [detailpage, setdetailpage] = useState()
    const [loginresp, setloginresp] = useState()
    const footer = () => {
        fetch(`https://alfatimapropertis.com/studiohub/public/api/web-settings`)
            .then(res => res.json())
            .then(resp => {
                setdata(resp)
            })
    }
    const home = () => {
        fetch(`https://alfatimapropertis.com/studiohub/public/api/home-data`)
            .then(res => res.json())
            .then(resp => {
                sethomepage(resp)
            })
    }
    const about = () => {
        fetch(`https://alfatimapropertis.com/studiohub/public/api/about-data`)
            .then(res => res.json())
            .then(resp => {
                setaboutpage(resp)
            })
    }
    const contact = () => {
        fetch(`https://alfatimapropertis.com/studiohub/public/api/contact-data`)
            .then(res => res.json())
            .then(resp => {
                setcontactpage(resp)
            })
    }
    const services = () => {
        fetch(`https://alfatimapropertis.com/studio/public/api/all-services`)
            .then(res => res.json())
            .then(resp => {
                setservicespage(resp)
            })
    }
    const servicesdetail = (id) => {
        fetch(`https://alfatimapropertis.com/studio/public/api/service-detail/${id}`)
            .then(res => res.json())
            .then(resp => {
                setdetailpage(resp)
            })
    }
    const register = (obj) => {
        console.log(obj);
        fetch(`https://alfatimapropertis.com/studio/public/api/register`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Accept': 'application/json',
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(resp => {
                console.log(resp);
                if (resp.success) {
                    alert("Register successfully")
                }
            })
    }
    const login = (obj) => {
        fetch(`https://alfatimapropertis.com/studio/public/api/login`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Accept': 'application/json',
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(resp => {
                console.log(resp);
                if (resp.success) {
                    alert("Login successfully")
                    setloginresp(resp)
                }
            })
    }
    const forget = (obj) => {
        console.log(obj);
        // fetch(`https://alfatimapropertis.com/studio/public/api/forget-password`,{
        //     method:"POST",
        //     headers:{
        //         'Content-Type': "application/json",
        //         'Accept': 'application/json',
        //     },
        //     body:JSON.stringify(obj)
        // })
        // .then(res => res.json())
        // .then(resp => {
        //     console.log(resp);
        //     // if(resp.success){
        //     //     alert("Login successfully")
        //     //     setloginresp(resp)
        //     // }
        // })
    }
    return (
        <Authdata.Provider value={{
            footer,
            home,
            about,
            aboutpage,
            homepage,
            data,
            contactpage,
            contact,
            services,
            servicespage,
            servicesdetail,
            detailpage,
            register,
            login,
            loginresp,
            forget
        }}>
            {children}
        </Authdata.Provider>
    )
}
export const useAuth = () => useContext(Authdata);
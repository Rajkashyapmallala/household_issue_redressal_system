class Freelancer {
    constructor(jsonObject) {
        this.id = jsonObject._id;
        this.fname = jsonObject.fname;
        this.lname = jsonObject.lname;
        this.email = jsonObject.email;
        this.password = jsonObject.password;
        this.address = jsonObject.address;
        this.city = jsonObject.city;
        this.state = jsonObject.state;
        this.department=jsonObject.department;
        this.mobile = jsonObject.mobile;
        this.aadhaar = jsonObject.aadhaar;
        this.pincode = jsonObject.pincode;
        this.skills = jsonObject.skills;
        this.className = "Freelancer";
    }
}

export default Freelancer;
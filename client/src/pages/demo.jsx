 const [form, setForm] = useState({});
  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.patch(`http://localhost:8000/api/v1/admin/resetpassword/${token}`,form)
      
      
      if(response.status===200){
        toast.success("Password Updated Successfully")
        setForm({password:"",newPassword:""})
      }
    } catch (error) {
      
    }
  }
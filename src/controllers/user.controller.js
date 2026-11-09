import data from "../../data.json"  with {type:"json"}

export const getAllUsers = (req, res) => {
  return res.status(200).json({
    message: "users data successfully retrieved",
    data: data,
  });
}


export const getUser = (req, res) => {
  const { age, role } = req.query;

  const user = data.filter(
    (user) => user.age === Number(age) && user.role == role,
  );


  if (user.length>0) {
    return res.status(200).json({
      message: "user data successfully retrieved",
      user: user,
    });
  } else {
   return res.status(404).json({message:"user not found"})
  }
}
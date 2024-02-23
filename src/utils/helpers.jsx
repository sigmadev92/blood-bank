export const getLoggedInUserName = (user) => {
  if (user.userType === "donar") return user.name;
  if (user.userType === "hospital") return user.hospitalName;
  if (user.userType === "organisation") return user.orgName;
};

export const getAntdInputValidation = () => {
  return [
    {
      required: true,
      message: "required",
    },
  ];
};

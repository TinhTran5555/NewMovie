import authAPI from "../../../../App/Api/authAPIs/authAPI";
import { useRequest } from "../../../../App/Hooks/useRequest";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { NavLink } from "react-router-dom";
import useViewport from "../../../../App/Hooks/useViewport";


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
    },
    mode: "onTouched",
  });
  const navigate = useNavigate();
   
  const viewPort = useViewport();
  const isMobileS = viewPort.width >= 425;
  const isMobile = viewPort.width >= 640;
   let widthLogin = "270px"
   let paddingLogin = "none"
   let offset = 0
   if (isMobileS) {
   widthLogin = "350px";

  }
   if (isMobile) {
    widthLogin = "580px";
    paddingLogin = "60px 32px 30px";
    offset = 2
  }
  const styleRegister = {
    width: widthLogin,
    height: "fit-content",
    zIndex: "1000",
    position: "relative",
    borderRadius: "6px",
    backgroundImage:
      "linear-gradient(to bottom,rgb(255 255 255 / 90%),rgba(64, 108, 106,.9))",
  };
  const styleContent = {
    padding: paddingLogin,
    color: "text-white",
  };
  const styleImg = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "13px",
  };
  const styleButton = {
    top: "0",
    right: "0",
    border: "2px solid white",
    position: "absolute",
    transform: "translate(50%,-50%)",
    transition: "all .2s",
    color: "white",
    padding: "12px",
    overflow: "visible",
    fontSize: "1.5rem",
    textAlign: "center",
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: "50%",
  };

  const { data: handleRegister, isLoading } = useRequest(
    (values) => authAPI.register(values),
    { isManual: true }
  );

  const onSubmit = async (values) => {
    try {
      await handleRegister(values);
      navigate("/login");
    } catch (error) {
      notification.error({
        message: "Đăng ký thất bại",
        description: error,
      });
    }
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <div className="Register" style={styleRegister}>
      <div style={styleContent}>
        <div className="container">
          <img
            style={styleImg}
            src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
            alt="Cybershop.edu.vn"
          />
          <h1 className="text-center mb-7 text-xl font-bold">Đăng kí</h1>
        </div>
        <div>
          <form
            className="flex flex-col items-center justify-center gap-4"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <div>
              <input
                type="text"
                placeholder="Tài Khoản"
                {...register("taiKhoan", {
                  required: {
                    value: true,
                    message: "Tài khoản không được để trống",
                  },
                  minLength: {
                    value: 5,
                    message: "Tài khoản phải từ 5 đến 20 ký tự",
                  },
                  maxLength: {
                    value: 20,
                    message: "Tài khoản phải từ 5 đến 20 ký tự",
                  },
                })}
              />
              {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
            </div>

            <input
              type="text"
              placeholder="Mật Khẩu"
              {...register("matKhau", {
                required: true,
              })}
            />

            <div>
              <input
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email không được để trống",
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email không đúng định dạng",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <input
              type="text"
              placeholder="Họ Tên"
              {...register("hoTen", {
                required: true,
              })}
            />
            <input
              type="text"
              placeholder="Số Điện Thoại"
              {...register("soDt", {
                required: true,
              })}
            />
            <button className="border p-3 bg-slate-100 font-bold">
              Đăng Ký
            </button>
          </form>
        </div>
      </div>
      <div className="text-lg pl-10 pb-2 underline">
        <NavLink to="/login">
          <p>Đã có tài khoản đến trang đăng nhập</p>
        </NavLink>
      </div>
      <button onClick={() => navigate("/")} style={styleButton}>
        X
      </button>
    </div>
  );
};

export default Register;

import { Button, Form, Input, notification } from "antd";
import { useForm, Controller } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginHander } from "../../Slices/authSlice";
import { NavLink } from "react-router-dom";
import useViewport from "../../../../App/Hooks/useViewport";
const Login = () => {
  const {
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onTouched",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

 
  const viewPort = useViewport();
  const isMobile = viewPort.width >= 640;
   let widthLogin = "270px"
   let paddingLogin = "none"
   let offset = 0
   if (!isMobile) {
   widthLogin = "270px";
   paddingLogin = "none";
    offset = 0
  }
   if (isMobile) {
    widthLogin = "580px";
    paddingLogin = "60px 32px 30px";
    offset = 2
  }
  const styleLogin = {
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
    color: "white",
    padding: "12px",
    overflow: "visible",
    fontSize: "1.5rem",
    textAlign: "center",
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: "50%",
  };

  const onSubmit = async (values) => {
    try {
      await dispatch(loginHander(values)).unwrap();
      navigate("/");
      notification.success({
        message: "Đăng nhập thành công",
      });
    } catch (error) {
      notification.error({
        message: "Đăng nhập thất bại",
        description: error,
      });
      navigate("/login");
    }
  };


  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div style={styleLogin}>
      <div style={styleContent}>
        <div className="container">
          <img
            style={styleImg}
            src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
            alt="Cybershop.edu.vn"
          />
          <h1 className="text-center mb-7 text-xl font-bold">Đăng nhập</h1>
        </div>
        <div>
          <Form
            className="ml-20 mr-20 text-center"
            onFinish={handleSubmit(onSubmit)}
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 8 }}
          >
            <Controller
              name="taiKhoan"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Tài khoản không được để trống",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <Form.Item
                  label="Tài khoản"
                  validateStatus={error ? "error" : ""}
                  help={error?.message}
                >
                  <Input type="text" {...field} />
                </Form.Item>
              )}
            />

            <Controller
              name="matKhau"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Mật khẩu không được để trống",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <Form.Item
                  label="Mật khẩu"
                  validateStatus={error ? "error" : ""}
                  help={error?.message}
                >
                  <Input type="password" {...field} />
                </Form.Item>
              )}
            />

            <Form.Item wrapperCol={{ offset: offset }}>
              <Button
                className="border bg-slate-100 font-bold"
                htmlType="submit"
                disabled={isLoading}
                loading={isLoading}
              >
                Đăng Nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="text-lg pl-10 pb-2 underline">
        <NavLink to="/register">
          <p>Chưa có tài khoản đến trang đăng kí</p>
        </NavLink>
      </div>

      <button onClick={() => navigate("/")} style={styleButton}>
        X
      </button>
    </div>
  );
};

export default Login;

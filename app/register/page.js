"use client";
import SmartSelect from "@/components/Select";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const navigateToLogin = () => {
    router.push("/login", { scroll: false });
  };

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen ">
      <div className="w-[400px] h-auto bg-white rounded-[12px] shadow-lg border-[1px] box-border p-[30px] flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px] pb-[16px]">
          <div>
            <div className="font-family-Raleway text-[24px] font-semibold text-center leading-normal">
              Register
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center gap-[20px]">
            <div className="flex flex-col gap-[8px]">
              <div>
                <label>First Name</label>
              </div>
              <div>
                <input
                  className="w-full h-[40px] rounded-[8px] px-[20px] font-family-Fira-Sans text-[15px] border-[1px] border-slate-200"
                  type="text"
                  placeholder="first name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div>
                <label>Last Name</label>
              </div>
              <div>
                <input
                  className="w-full h-[40px] rounded-[8px] px-[20px] font-family-Fira-Sans text-[15px] border-[1px] border-slate-200"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <div>
            <label>Email</label>
          </div>
          <div>
            <input
              className="w-full h-[40px] rounded-[8px] px-[20px] font-family-Fira-Sans text-[15px] border-[1px] border-slate-200"
              type="email"
              placeholder="example@domain.com"
            />
          </div>
        </div>

        <div className="flex items-center gap-[16px]">
          <div className="flex flex-col gap-[8px] flex-1 flex-grow-[2.3]">
            <div>
              <label>Mobile</label>
            </div>
            <div>
              <input
                className="w-full h-[40px] rounded-[8px] px-[20px] font-family-Fira-Sans text-[15px] border-[1px] border-slate-200"
                type="mobile"
                placeholder="enter your mobile"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[8px] flex-1">
            <div>
              <label>Gender</label>
            </div>
            <div>
              <SmartSelect />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <div>
            <label>Password</label>
          </div>
          <div>
            <input
              className="w-full h-[40px] rounded-[8px] px-[20px] font-family-Fira-Sans text-[15px] border-[1px] border-slate-200"
              type="password"
              placeholder="Type your password"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <button className="w-full h-[40px] bg-black text-white font-family-Roboto text-[16px] font-semibold rounded-[8px]">
            Login
          </button>
        </div>
      </div>

      <div className="pt-[30px]">
        <div className="font-family-Roboto text-[15px] font-medium leading-normal">
          Already Registerd?{" "}
          <span
            className="text-blue-700 cursor-pointer"
            onClick={navigateToLogin}
          >
            Login
          </span>
        </div>
      </div>
    </section>
  );
};

export default Register;

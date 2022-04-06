import {Oval} from "react-loader-spinner";

export const Loader = () => {
    return (
        <div className="loader">
            <Oval color="#917b4e"
                  secondaryColor="#c4ad80"
                  height={50}
                  width={100}
            />
        </div>
    )
}
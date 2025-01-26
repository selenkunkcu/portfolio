import NavigationDots from "@/components/NavigationDots";
import SocialMedia from "@/components/SocialMedia";

import globalStyles from "../pages/index.module.scss";

const AppWrap = (Component, idName, classNames) =>
    function HOC() {
        return (
            <div
                id={idName}
                className={`${globalStyles.app__container} 
                ${classNames}`}
            >
                <SocialMedia />
                <div className={`${globalStyles.app__wrapper} ${globalStyles.app__flex}`}>
                    <Component />

                    <div className={globalStyles.copyright}>
                        <p className={globalStyles.p_text}>@2024 SELEN</p>
                        <p className={globalStyles.p_text}>All rights reserved</p>
                    </div>
                </div>
                <NavigationDots active={idName} />
            </div>
        );
    };

export default AppWrap;

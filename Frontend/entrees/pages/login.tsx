import React, {memo} from "react";
import {supabase} from "../shared/db/db.connector";
import {Auth} from "@supabase/ui";

export const Login = memo(() => {

    const ogar = async () => {
        const {user, session, error} = await supabase.auth.signIn({
            provider: 'github',
        })

        return {
            user, session, error
        }
    }

    const awg = () => {
        const user = supabase.auth.user()
        console.log(user)
    }

    const awg2 = () => {
        const session = supabase.auth.session()
        console.log(session)
    }

    return (
        <div>
            <div className="pt-6">
                <Auth
                    supabaseClient={supabase}
                    providers={['github']}
                    socialLayout="horizontal"
                    socialButtonSize="xlarge"
                />
            </div>

            <button onClick={awg}>awg</button>
            <button onClick={awg2}>awg2</button>
        </div>
    );
});

Login.displayName = "Login";

export default Login;

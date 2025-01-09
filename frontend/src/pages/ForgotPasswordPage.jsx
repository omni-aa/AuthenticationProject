import {motion} from 'framer-motion';
import {useState} from 'react';
import {forgotPassword} from "../../../backend/controllers/auth.controllers.js";
import {useAuthStore} from "../store/authStore.js";

function ForgotPasswordPage(props) {
    const [email, setEmail] = useState('');
    const [isSubmitted,setIsSubmitted] = useState('');

    const {isLoading, forgotPassword} = useAuthStore();
    return (
        <div></div>
    );
}

export default ForgotPasswordPage;
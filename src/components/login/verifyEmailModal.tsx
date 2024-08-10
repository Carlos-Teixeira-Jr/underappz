import { showErrorToast, ErrorToastNames, showSuccessToast, SuccessToastNames } from "@/common/utils/toast";
import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CloseIcon from "../icons/closeIcon";
import Modal from 'react-modal';
import Image from 'next/image';
import Loading from "../icons/loadingIcon";

export interface IEmailDataProp {
  email: string | null | string[],
  emailVerificationCode: string,
  password: string | null,
}

export interface IVerifyEmailModal {
  isOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
  emailVerificationDataProp: IEmailDataProp;
}

const VerifyEmailModal: React.FC<IVerifyEmailModal> = ({
  isOpen,
  setModalIsOpen,
  emailVerificationDataProp,
}) => {
  console.log("🚀 ~ emailVerificationDataProp:", emailVerificationDataProp);
  const [isMobile, setIsMobile] = useState(false);
  const [input, setInput] = useState('');
  const [verificationCodeError, setVerificationCodeError] = useState('');
  const [showResendMessage, setShowResendMessage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [emailVerificationData, setEmailVerificationData] = useState<IEmailDataProp>({
    email: null,
    emailVerificationCode: '',
    password: null,
  });

  useEffect(() => {
    setEmailVerificationData(emailVerificationDataProp);
  }, [emailVerificationDataProp]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = async () => {
    try {
      toast.loading('Enviando');
      setLoading(true)
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/verify-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: emailVerificationData.email,
            emailVerificationCode: emailVerificationData.emailVerificationCode,
          }),
        }
      );

      if (response.ok) {
        try {
          signIn('credentials', {
            email: emailVerificationData.email,
            password: emailVerificationData.password,
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        setVerificationCodeError(
          'Insira corretamente o código de validação enviado para o e-mail de cadastro.'
        );
        toast.dismiss();
        showErrorToast(ErrorToastNames.VerificationCode);
        setLoading(false);
      }
    } catch (error) {
      toast.dismiss();
      showErrorToast(ErrorToastNames.ServerConnection);
      setLoading(false);
    }
  };

  const handleResendVerifyEmailCode = async (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      toast.loading('Enviando...');
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/re-send-email-verify`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: emailVerificationData.email,
          }),
        }
      );

      if (response.ok) {
        setShowResendMessage(false);
        setTimeout(() => {
          setShowResendMessage(true);
        }, 60000);
        toast.dismiss();
        showSuccessToast(SuccessToastNames.VerificationCode);
        setLoading(false)
        const data = await response.json();

        const newEmailVerificationCode = data.emailVerificationCode;

        setEmailVerificationData({
          ...emailVerificationData,
          emailVerificationCode: newEmailVerificationCode,
        });
      }
    } catch (error) {
      showErrorToast(ErrorToastNames.ServerConnection);
      setLoading(true);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Verify email modal"
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          zIndex: 99,
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          border: '1px solid #ccc',
          background: 'black',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '30px',
          outline: 'none',
          padding: '20px',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height: 'auto',
          width: isMobile ? '90%' : 'auto',
          margin: '0 auto 0 auto',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        },
      }}
    >
      <div>
        <div className="bg-black rounded-[30px] flex flex-col justify-center m-2 gap-2">
          <div>
            <div className="w-fit float-right">
              <CloseIcon
                onClick={() => setModalIsOpen(false)}
                fill="#FBFFFD"
                className="float-right cursor-pointer"
              />
            </div>
          </div>

          <Image
            src={'/logo.png'}
            alt={'Locale imóveis logomarca'}
            width={300}
            height={150}
            className="mx-auto"
          />

          <p className="font-bold text-sm text-quinary">
            Insira o código de verificação enviado para o e-mail usado no
            cadastro.
          </p>

          <label className="md:text-xl text-lg font-bold text-quinary drop-shadow-md md:w-full mt-auto mb-1">
            Código de verificação
          </label>
          <input
            className={`w-full h-12 rounded-[10px] border-[1px] drop-shadow-xl text-quaternary p-2 text-xl font-semibold ${verificationCodeError ? 'border-red-500' : 'border-quaternary'
              }`}
            type="text"
            value={input}
            onChange={(e) => {
              setEmailVerificationData({
                ...emailVerificationData,
                emailVerificationCode: e.target.value,
              });
              setInput(e.target.value);
            }}
            maxLength={10}
          />

          {verificationCodeError && (
            <span className="text-red-500 text-xs">
              {verificationCodeError}
            </span>
          )}

          <button
            className={`flex items-center flex-row justify-center w-[75%] h-14 mx-auto mt-5 text-quinary rounded-full font-bold text-lg md:text-xl ${loading ?
              'bg-red-300 transition-colors duration-300' :
              'bg-primary transition-colors duration-300 hover:bg-secondary hover:text-white cursor-pointer'
              }`}
            onClick={handleSubmit}
            disabled={loading}
          >
            <span className={`${loading ? 'mr-5' : ''}`}>Confirmar</span>
            {loading && <Loading />}
          </button>
        </div>

        {showResendMessage && (
          <p
            className="font-bold text-sm text-quinary mx-auto my-5 md:my-0 md:mb-4 md:mx-auto pt-2 relative inline-block group transition-colors duration-300 hover:text-tertiary cursor-pointer w-full text-center"
            onClick={handleResendVerifyEmailCode}
          >
            Reenviar código de verificação de email.
          </p>
        )}

        {!showResendMessage && (
          <span className="text-xs text-primary leading-3">
            Aguarde 60 segundos antes de reenviar um novo código de verificação
            de email.
          </span>
        )}
      </div>
    </Modal>
  );
};

export default VerifyEmailModal;
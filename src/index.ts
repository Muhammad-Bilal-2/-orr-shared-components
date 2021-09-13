import { Login } from "./pages/login/Login";
import { ModalForgotPassword } from "./pages/login/ModalForgotPassword";
import { LoginForm } from "./pages/login/LoginForm";
import { LoginImage } from "./pages/login/LoginImage";
import { ModalLogin } from "./pages/login/ModalLogin";
import { CenteredSpinner, ButtonSpinner } from "./Spinner";
import {
  IsPhoneProvider,
  useIsPhoneContext,
} from "./isPhoneContext/isPhoneContext";
import { ModalOverlay } from "./Overlays/ModalOverlay";
import { NativeOverlay } from "./Overlays/NativeOverlay";
import { AlertWrapped } from "./Alerts/AlertWrapped";
import {
  NumberBoolToText,
  StringToShortDate,
  StringOrDefault,
  NumberOrDefault,
} from "./utilities/TextExtensions";
import { useOnce } from "./utilities/UseOnce";
import {
  notEmpty,
  isNotNull,
  GetToday,
  groupBy,
  extract,
  OrderBy,
  checkValuesData,
  nameOf,
  getUniqueBy,
} from "./utilities/utilities";
import { LoadingButton } from "./Buttons/LoadingButton";
import { SimpleCard } from "./Cards/SimpleCard";
import { PasswordInput } from "./Inputs/PasswordInput";
import { BackButton } from "./Buttons/BackButton";
import { ButtonLoadingSpinner } from "./Buttons/ButtonSpinner";
import { ModalNoHeaderOverlay } from "./Overlays/ModalNoHeaderOverlay";
import { ModalSuccess } from "./Overlays/ModalSuccess";

export {
  CenteredSpinner,
  IsPhoneProvider,
  useIsPhoneContext,
  ButtonSpinner,
  AlertWrapped,
  ModalOverlay,
  NativeOverlay,
  ModalSuccess,
  ModalNoHeaderOverlay,
  NumberBoolToText,
  StringToShortDate,
  StringOrDefault,
  NumberOrDefault,
  notEmpty,
  isNotNull,
  GetToday,
  groupBy,
  extract,
  OrderBy,
  checkValuesData,
  nameOf,
  getUniqueBy,
  useOnce,
  Login,
  LoadingButton,
  SimpleCard,
  PasswordInput,
  BackButton,
  ButtonLoadingSpinner,
  ModalForgotPassword,
  LoginForm,
  LoginImage,
  ModalLogin,
};

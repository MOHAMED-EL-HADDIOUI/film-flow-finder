import React, { createContext, useState, useContext, useEffect } from 'react';

const translations = {
  en: {
    // Auth pages
    welcomeBack: "Welcome Back",
    signInToContinue: "Sign in to continue to your account",
    createAccount: "Create Account",
    joinUs: "Join us to start watching movies",
    emailAddress: "Email address",
    password: "Password",
    confirmPassword: "Confirm Password",
    fullName: "Full Name",
    signIn: "Sign In",
    signUp: "Sign Up",
    signingIn: "Signing in...",
    creatingAccount: "Creating Account...",
    noAccount: "Don't have an account?",
    haveAccount: "Already have an account?",
    enterEmail: "Enter your email",
    enterPassword: "Enter your password",
    createPassword: "Create a password",
    confirmYourPassword: "Confirm your password",
    enterFullName: "Enter your full name",
    
    // Validation messages
    emailRequired: "Email is required",
    emailInvalid: "Email is invalid",
    passwordRequired: "Password is required",
    passwordLength: "Password must be at least 6 characters",
    nameRequired: "Name is required",
    confirmPasswordRequired: "Please confirm your password",
    passwordsDoNotMatch: "Passwords do not match",
    
    // Error messages
    signInError: "Failed to sign in. Please check your credentials.",
    signUpError: "Failed to create account. Please try again.",
  },
  fr: {
    // Pages d'authentification
    welcomeBack: "Bienvenue",
    signInToContinue: "Connectez-vous pour accéder à votre compte",
    createAccount: "Créer un compte",
    joinUs: "Rejoignez-nous pour commencer à regarder des films",
    emailAddress: "Adresse e-mail",
    password: "Mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    fullName: "Nom complet",
    signIn: "Se connecter",
    signUp: "S'inscrire",
    signingIn: "Connexion en cours...",
    creatingAccount: "Création du compte...",
    noAccount: "Vous n'avez pas de compte ?",
    haveAccount: "Vous avez déjà un compte ?",
    enterEmail: "Entrez votre e-mail",
    enterPassword: "Entrez votre mot de passe",
    createPassword: "Créez un mot de passe",
    confirmYourPassword: "Confirmez votre mot de passe",
    enterFullName: "Entrez votre nom complet",
    
    // Messages de validation
    emailRequired: "L'e-mail est requis",
    emailInvalid: "L'e-mail est invalide",
    passwordRequired: "Le mot de passe est requis",
    passwordLength: "Le mot de passe doit contenir au moins 6 caractères",
    nameRequired: "Le nom est requis",
    confirmPasswordRequired: "Veuillez confirmer votre mot de passe",
    passwordsDoNotMatch: "Les mots de passe ne correspondent pas",
    
    // Messages d'erreur
    signInError: "Échec de la connexion. Veuillez vérifier vos identifiants.",
    signUpError: "Échec de la création du compte. Veuillez réessayer.",
  },
  ar: {
    // صفحات المصادقة
    welcomeBack: "مرحباً بعودتك",
    signInToContinue: "سجل دخولك للمتابعة إلى حسابك",
    createAccount: "إنشاء حساب",
    joinUs: "انضم إلينا لبدء مشاهدة الأفلام",
    emailAddress: "البريد الإلكتروني",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    fullName: "الاسم الكامل",
    signIn: "تسجيل الدخول",
    signUp: "إنشاء حساب",
    signingIn: "جاري تسجيل الدخول...",
    creatingAccount: "جاري إنشاء الحساب...",
    noAccount: "ليس لديك حساب؟",
    haveAccount: "لديك حساب بالفعل؟",
    enterEmail: "أدخل بريدك الإلكتروني",
    enterPassword: "أدخل كلمة المرور",
    createPassword: "إنشاء كلمة مرور",
    confirmYourPassword: "تأكيد كلمة المرور",
    enterFullName: "أدخل اسمك الكامل",
    
    // رسائل التحقق
    emailRequired: "البريد الإلكتروني مطلوب",
    emailInvalid: "البريد الإلكتروني غير صالح",
    passwordRequired: "كلمة المرور مطلوبة",
    passwordLength: "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل",
    nameRequired: "الاسم مطلوب",
    confirmPasswordRequired: "يرجى تأكيد كلمة المرور",
    passwordsDoNotMatch: "كلمات المرور غير متطابقة",
    
    // رسائل الخطأ
    signInError: "فشل تسجيل الدخول. يرجى التحقق من بيانات الاعتماد الخاصة بك.",
    signUpError: "فشل إنشاء الحساب. يرجى المحاولة مرة أخرى.",
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 
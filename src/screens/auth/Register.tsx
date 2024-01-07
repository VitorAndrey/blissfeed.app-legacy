import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

import { yupResolver } from "@hookform/resolvers/yup";
import { InputErrorMessage } from "@layout/InputErrorMessage";
import { Loading } from "@layout/Loading";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@ui/Button";
import { Input } from "@ui/Input";
// import { SocialButton } from "@ui/SocialButton";
import { Text } from "@ui/Text";
import { TextButton } from "@ui/TextButton";
import * as yup from "yup";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";
// import GoogleIcon from "@assets/googleIcon.svg";
import { RegisterUser } from "@models/index";
import { registerUser } from "@services/authentication";

import { CheckIcon } from "lucide-react-native";

const schema = yup
  .object({
    name: yup.string().required("Preencha o Nome."),
    email: yup
      .string()
      .required("Preencha o Email.")
      .email("Insira um Email válido."),
    password: yup
      .string()
      .required("Defina uma Senha.")
      .min(8, "A senha deve ter no mínimo 8 caracteres."),
    confirmPassword: yup
      .string()
      .required("Confirme sua Senha.")
      .oneOf([yup.ref("password")], "As duas senhas devem combinar."),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

type ModalStatus = "success" | "error" | null;

export function Register() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [agreedConditions, setAgreedConditions] = useState<boolean>(false);
  const [modalStatus, setModalStatus] = useState<ModalStatus>(null);

  const navigation = useNavigation<AuthNavigationRoutesProps>();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    const { name, email, password } = data;

    try {
      await registerUser({
        name,
        email,
        password,
      } satisfies RegisterUser);

      reset();
    } catch (error) {
      console.log(error);
      setModalStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  function handleNavigateToLogin() {
    setModalStatus(null);
    navigation.navigate("Login");
  }

  function handleAgreedConditions() {
    setAgreedConditions((prev) => !prev);
  }

  return (
    <View className="flex-1">
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingVertical: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center px-10 pb-4">
          <Text className="mb-6 max-w-[200px] text-center font-inter-600 text-2xl">
            Criar Conta
          </Text>
          <Text className="text-center text-theme-gray-medium">
            Desabafe, conecte-se e encontre paz. Junte-se à comunidade
            Blissfeed.
          </Text>
        </View>

        <View className="py-4 px-8">
          <Text>Nome</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                inputProps={{
                  onChangeText: onChange,
                  onBlur: onBlur,
                  value: value,
                  placeholder: "Ex. Jhon Doe",
                }}
              />
            )}
            name="name"
          />
          <InputErrorMessage message={errors.name?.message} />

          <Text>Email</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                inputProps={{
                  onChangeText: onChange,
                  onBlur: onBlur,
                  value: value,
                  placeholder: "exemplo@gmail.com",
                }}
              />
            )}
            name="email"
          />
          <InputErrorMessage message={errors.email?.message} />

          <Text>Senha</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                inputProps={{
                  onChangeText: onChange,
                  onBlur: onBlur,
                  value: value,
                  placeholder: "********",
                }}
                secureInput
              />
            )}
            name="password"
          />
          <InputErrorMessage message={errors.password?.message} />

          <View className="mb-8 flex-row items-center">
            <TouchableOpacity
              onPress={handleAgreedConditions}
              className={`h-4 w-4 items-center justify-center rounded-sm ${
                agreedConditions ? "bg-theme-primary" : "bg-theme-gray-light"
              }`}
            >
              {agreedConditions && <CheckIcon color="white" size={14} />}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={handleAgreedConditions}
            >
              <Text className="mx-2">Aceito os</Text>
            </TouchableOpacity>
            <TextButton underline>termos e condições.</TextButton>
          </View>

          {isLoading ? (
            <Loading iconSize className="self-center" />
          ) : (
            <Button
              touchableOpacityProps={{
                onPress: handleSubmit(onSubmit),
              }}
            >
              Registrar
            </Button>
          )}

          {/* <View className="flex-row items-center gap-2 py-8 px-8">
            <View className="h-px flex-1 bg-theme-gray-light"></View>
            <Text className="text-xs text-theme-gray-medium">Registre com</Text>
            <View className="h-px flex-1 bg-theme-gray-light"></View>
          </View>

          <SocialButton>
            <GoogleIcon className="h-8 w-8" />

            <Text>Google</Text>
          </SocialButton> */}

          <View className="mt-8 flex-row items-center justify-center">
            <Text className="mr-1 text-xs">Já tem uma conta?</Text>
            <TextButton
              underline
              touchableOpacityProps={{
                onPress: handleNavigateToLogin,
              }}
            >
              Entrar!
            </TextButton>
          </View>
        </View>
      </ScrollView>

      <Modal isVisible={!modalStatus}>
        <View>
          {modalStatus === "success" ? (
            <>
              <Text>Tudo Certo!</Text>

              <Button
                touchableOpacityProps={{
                  onPress: handleNavigateToLogin,
                }}
              >
                Fazer Login
              </Button>
            </>
          ) : (
            <>
              <Text>Erro ao registrar usuario!</Text>

              <Button
                touchableOpacityProps={{
                  onPress: () => setModalStatus(null),
                }}
              >
                Fechar
              </Button>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
}

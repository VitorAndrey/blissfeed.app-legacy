import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
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
import { LoginUser, User } from "@models/index";
import { UserContext } from "@contexts/UserContext";
import { loginUser } from "@services/authentication";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Preencha o Email.")
      .email("Insira um Email válido."),
    password: yup
      .string()
      .required("Defina uma Senha.")
      .min(8, "A senha deve ter no mínimo 8 caracteres."),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

type ModalStatus = "success" | "error" | null;

export function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalStatus, setModalStatus] = useState<ModalStatus>(null);
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  const { handleUpdateUser } = useContext(UserContext);
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

    const { email, password } = data;

    try {
      const user = await loginUser({
        email,
        password,
      } satisfies LoginUser);

      reset();
      setModalStatus("success");
      setLoggedUser(user);
    } catch (error) {
      setModalStatus("error");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  function handleNavigateToRegister() {
    navigation.navigate("Register");
  }

  function handleCompleteLogin() {
    setModalStatus(null);
    handleUpdateUser(loggedUser);
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
            Bem vindo de volta!
          </Text>
          <Text className="text-center text-theme-gray-medium">
            Sentimos sua falta por aqui... É bom ter você conosco novamente!
          </Text>
        </View>

        <View className="py-4 px-8">
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

          <View className="mb-8 flex-row items-center justify-end">
            <TextButton underline>Esqueceu a senha?</TextButton>
          </View>

          {isLoading ? (
            <Loading iconSize className="self-center" />
          ) : (
            <Button
              touchableOpacityProps={{
                onPress: handleSubmit(onSubmit),
              }}
            >
              Entrar
            </Button>
          )}

          {/* <View className="flex-row items-center gap-2 py-8 px-8">
            <View className="h-px flex-1 bg-theme-gray-light"></View>
            <Text className="text-xs text-theme-gray-medium">Ou entre com</Text>
            <View className="h-px flex-1 bg-theme-gray-light"></View>
          </View>

          <SocialButton>
            <GoogleIcon className="h-8 w-8" />

            <Text>Google</Text>
          </SocialButton> */}

          <View className="mt-8 flex-row items-center justify-center">
            <Text className="mr-1 text-xs">Não tem uma conta?</Text>
            <TextButton
              underline
              touchableOpacityProps={{
                onPress: handleNavigateToRegister,
              }}
            >
              Registrar!
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
                  onPress: handleCompleteLogin,
                }}
              >
                Começar
              </Button>
            </>
          ) : (
            <>
              <Text>Erro ao fazer login!</Text>

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

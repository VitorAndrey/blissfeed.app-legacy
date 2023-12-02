import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { LoginUser } from "@models/index";
import { UserContext } from "@contexts/UserContext";
import { loginUser } from "@services/authentication";

import { InputErrorMessage } from "@components/layout/InputErrorMessage";
import { Loading } from "@components/layout/Loading";
import { Button } from "@components/ui/Button";
import { Input } from "@components/ui/Input";
import { Text } from "@components/ui/Text";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Preencha o Email.")
      .email("Insira um Email válido."),
    password: yup
      .string()
      .required("Insira sua Senha.")
      .min(8, "A senha deve ter no mínimo 8 caracteres."),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {} = useContext(UserContext);

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
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text>Faça o Login!</Text>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              inputProps={{
                onChangeText: onChange,
                onBlur: onBlur,
                value: value,
              }}
              label="E-mail:"
            />
          )}
          name="email"
        />
        <InputErrorMessage message={errors.email?.message} />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              inputProps={{
                onChangeText: onChange,
                onBlur: onBlur,
                value: value,
              }}
              label="Senha:"
            />
          )}
          name="password"
        />
        <InputErrorMessage message={errors.password?.message} />

        {isLoading ? (
          <Loading />
        ) : (
          <Button onPress={handleSubmit(onSubmit)}>Avançar</Button>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

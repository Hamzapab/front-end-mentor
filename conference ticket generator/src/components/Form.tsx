import { useForm, type SubmitHandler } from "react-hook-form";
import { CircleAlert } from "lucide-react";
import z from "zod";
import { FormMessage } from "./EndMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyDropzone } from "./DragDrop";
import { useCallback, useState } from "react";

const schema = z.object({
  name: z.string().min(1, { message: "Please enter your Full name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  username: z
    .string()
    .startsWith("@", { message: "Please Enter a valid username" }),
  file: z.any().refine((file) => file instanceof File && file.size > 0, {
    message: "File is required",
  }),
});

export type FormData = z.infer<typeof schema>;
type CustomFormProps = {
  onSubmitSuccess: () => void;
};

export function CustomForm({ onSubmitSuccess }: CustomFormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState<FormData>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onFileSelect = useCallback(
    (files: File[]) => {
      setFiles(files);
      setValue("file", files[0], { shouldValidate: true });
    },
    [setFiles, setValue]
  );
  const onSubmit: SubmitHandler<FormData> = (data) => {
    setFormData(data);
    onSubmitSuccess();
  };

  return formData ? (
    <FormMessage {...formData} />
  ) : (
    <form
      className="flex flex-col py-4 mt-10 max-w-[450px] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
      aria-labelledby="form-title"
      noValidate
    >
      {/* for screen Reader */}
      <h2 id="form-title" className="sr-only">
        Conference Ticket Generator Form
      </h2>
      <label>Upload Avatar</label>
      <MyDropzone onFileSelect={onFileSelect} files={files} />
      {errors.file && (
        <span className="text-xs text-red-500  flex items-center gap-2 mb-5">
          <CircleAlert className="w-4" />
          {typeof errors.file?.message === "string"
            ? errors.file.message
            : null}
        </span>
      )}
      <label htmlFor="name" className="mb-5">
        Full Name
        <input
          type="text"
          className="bg-[#4b486a4d] border-2 border-gray-500 outline-0 focus:border-white w-full py-2 ps-4 rounded-lg 
           transition-all duration-300 ease-in hover:cursor-pointer hover:bg-[#4b486ab3]"
          id="name"
          placeholder="Your Full Name"
          {...register("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
        />
        {errors.name && (
          <span
            id="name-error"
            className="flex gap-2 mt-2 text-xs items-center text-red-500"
            role="alert"
          >
            <CircleAlert className="w-4" />
            {errors.name.message}
          </span>
        )}
      </label>
      <label htmlFor="email" className="mb-5">
        Email Address
        <input
          type="email"
          className="bg-[#4b486a4d]  border-2 border-gray-500 outline-0 focus:border-white w-full py-2 ps-4 rounded-lg
                     transition-all duration-300 ease-in hover:cursor-pointer hover:bg-[#4b486ab3]"
          placeholder="example@gmail.com"
          id="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
        />
        {errors.email && (
          <span
            id="email-error"
            className="flex gap-2 mt-2 text-xs items-center text-red-500"
            role="alert"
          >
            <CircleAlert className="w-4" />
            {errors.email.message}
          </span>
        )}
      </label>
      <label htmlFor="username" className="mb-5">
        GitHub Username
        <input
          type="text"
          className="bg-[#4b486a4d]  border-2 border-gray-500 outline-0 focus:border-white w-full py-2 ps-4 rounded-lg
                     transition-all duration-300 ease-in hover:cursor-pointer hover:bg-[#4b486ab3]"
          id="username"
          placeholder="@your_username"
          {...register("username")}
          aria-describedby="username-desc"
          autoComplete="username"
        />
        <span id="username-desc" className="sr-only">
          Your GitHub username.
        </span>
        {errors.username && (
          <span
            id="email-error"
            className="flex gap-2 mt-2 text-xs items-center text-red-500"
            role="alert"
          >
            <CircleAlert className="w-4" />
            {errors.username.message}
          </span>
        )}
      </label>
      <input
        type="submit"
        value="Generate My Ticket"
        className="bg-[#e16151] text-[#0c082b] font-bold p-1.5 rounded-lg
        border cursor-pointer hover:border-1 hover:border-[#0c082b] hover:bg-[#f17865] transition-all duration-300"
        aria-label="Generate My Ticket"
      />
    </form>
  );
}

import { ErrorToastNames, showErrorToast } from "@/common/utils/toast";
import axios from "axios";
import { useState } from "react";
import Loading from "./icons/loadingIcon";

const CreateForm = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    type: "text",
    title: "",
    text: "",
    date: "",
    author: "",
    image: "",
  });

  const inputsClassNames = "border p-2  text-quaternary w-full";

  const inputs = [
    {
      key: "title",
      label: "Título",
      onChange: (e: any) => setFormData({ ...formData, title: e.target.value }),
      value: formData.title,
      type: "text",
      required: true,
    },
    {
      key: "text",
      label: "Texto",
      onChange: (e: any) => setFormData({ ...formData, text: e.target.value }),
      value: formData.text,
      type: "text",
      required: true,
    },
    {
      key: "author",
      label: "Autor",
      onChange: (e: any) =>
        setFormData({ ...formData, author: e.target.value }),
      value: formData.author,
      type: "text",
      required: true,
    },
    {
      key: "date",
      label: "Data",
      onChange: (e: any) => setFormData({ ...formData, date: e.target.value }),
      value: formData.date,
      type: "date",
      required: false,
    },
    {
      key: "image",
      label: "Imagem",
      onChange: (e: any) => setFormData({ ...formData, image: e.target.value }),
      value: formData.image,
      type: "file",
      required: false,
    },
  ];

  const handleSubmit = async () => {
    const hasEmptyInputs = Object.values(formData).some((e) => e === "");

    if (hasEmptyInputs) {
      console.log("erro");
    } else {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/post`,
          formData
        );
      } catch (error) {
        showErrorToast(ErrorToastNames.CreatePost);
      }
    }
  };

  const handleCancel = () => {
    setFormData({
      type: "text",
      title: "",
      text: "",
      date: "",
      author: "",
      image: "",
    });
  };

  return (
    <main>
      <div
        className="cursor-pointer my-10 text-2xl flex justify-center"
        onClick={() => setFormIsOpen(!formIsOpen)}
      >
        {formIsOpen ? (
          <span>Ver sua galeria de textos</span>
        ) : (
          <span>Criar postagem de texto</span>
        )}
      </div>

      {formIsOpen && (
        <div>
          {inputs.map((input) => (
            <div className="my-2" key={input.key}>
              <h3 className="">{input.label}</h3>
              {input.key === "text" ? (
                <textarea
                  value={input.value}
                  onChange={input.onChange}
                  className={`${inputsClassNames} h-20 my-2 rounded`}
                  required={input.required}
                />
              ) : (
                <input
                  value={input.value}
                  onChange={input.onChange}
                  className={`${inputsClassNames} h-9 my-2 rounded ${input.key === 'image' ? 'border-none' : ''} ${input.key === 'date' ? 'w-1/4' : 'w-full'}`}
                  type={input.type}
                  required={input.required}
                />
              )}
            </div>
          ))}

          <div className="flex gap-10">
            <button
              className="cursor-pointer w-full text-quaternary p-2 my-5 bg-tertiary rounded"
              onClick={handleCancel}
            >
              Cancelar
            </button>
            <button
              className="cursor-pointer w-full p-2 my-5 bg-primary rounded"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? <Loading /> : <span>Postar</span>}
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default CreateForm;

import axios from "axios";
import { useState } from "react";

const CreateForm = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    type: 'text',
    title: "",
    text: "",
    date: "",
    author: "",
    image: "",
  });
  console.log("🚀 ~ CreateForm ~ formData:", formData)

  const inputsClassNames = "border p-2  text-quaternary w-full"

  const inputs = [
    {
      key: "title",
      label: "Título",
      onChange: (e: any) => setFormData({ ...formData, title: e.target.value }),
      value: formData.title,
      type: 'text',
      required: true
    },
    {
      key: "text",
      label: "Texto",
      onChange: (e: any) => setFormData({ ...formData, text: e.target.value }),
      value: formData.text,
      type: 'text',
      required: true
    },
    {
      key: "date",
      label: "Data",
      onChange: (e: any) => setFormData({ ...formData, date: e.target.value }),
      value: formData.date,
      type: 'date',
      required: false
    },
    {
      key: "author",
      label: "Autor",
      onChange: (e: any) => setFormData({ ...formData, author: e.target.value }),
      value: formData.author,
      type: 'text',
      required: true
    },
    {
      key: "image",
      label: "Imagem",
      onChange: (e: any) => setFormData({ ...formData, image: e.target.value }),
      value: formData.image,
      type: 'file',
      required: false
    },
  ];

  const handleSubmit = async () => {
    const hasEmptyInputs = Object.values(formData).some((e) => e === '');

    if (hasEmptyInputs) {
      console.log('erro');
    } else {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/post`, formData);

      console.log("🚀 ~ handleSubmit ~ response:", response)

    }
  }

  return (
    <main>
      <div
        className="cursor-pointer"
        onClick={() => setFormIsOpen(!formIsOpen)}
      >
        Criar
      </div>

      {formIsOpen && (
        <div>
          {inputs.map((input) => (
            <div key={input.key}>
              <h3>{input.label}</h3>
              {input.key === "text" ? (
                <textarea
                  value={input.value}
                  onChange={input.onChange}
                  className={`${inputsClassNames} h-20`}
                  required={input.required}
                />
              ) : (
                <input
                  value={input.value}
                  onChange={input.onChange}
                  className={`${inputsClassNames} h-9`}
                  type={input.type}
                  required={input.required}
                />
              )}
            </div>
          ))}

          <button className="cursor-pointer w-full p-2 my-5 bg-primary" onClick={handleSubmit}>Enviar</button>
        </div>
      )}
    </main>
  );
};

export default CreateForm;

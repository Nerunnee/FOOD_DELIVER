export const putOrder = async (id: number, status: string) => {
  const body = { status };

  try {
    await fetch(`${process.env.API_URL}/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error);
  }
};

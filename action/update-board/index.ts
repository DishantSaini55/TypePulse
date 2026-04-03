"use server";

import { db } from "@/lib/db";
import { InputType, OutputType } from "./types";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { UpdateBoard } from "./schema";
import { createAuditLog } from "@/lib/create-audit-log";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

const handler = async (data: InputType): Promise<OutputType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  let board;
  try {
    board = await db.board.update({
      where: { id: data.id, orgId },
      data: {
        title: data.title,
      },
    });
    await createAuditLog({
      entityId: board.id,
      entityType: ENTITY_TYPE.LIST,
      entityTitle: board.title,
      action: ACTION.UPDATE,
    });
  } catch (error) {
    return {
      error: "Error updating board",
    };
  }

  revalidatePath(`/board/${data.id}`);
  return { data: board };
};

export const updateBoard = createSafeAction(UpdateBoard, handler);

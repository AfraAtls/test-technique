<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TicketController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:api');
    // }


    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $tickets = Ticket::all();

        return response()->json(['data' => $tickets], 200);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $ticket = new Ticket([
            'type' => $request->get('type'),
            'priority' => $request->get('priority'),
            'title' => $request->get('title'),
            'description' => $request->get('description'),
            'context' => $request->get('context'),
            'url' => $request->get('url'),
            'browser' => $request->get('browser'),
            'operating_system' => $request->get('operating_system'),
            'attachment' => $request->get('attachment')
        ]);

        $ticket->save();

        return response()->json(['data' => $ticket], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id): JsonResponse
    {
        $ticket = Ticket::find($id);

        if (!$ticket) {
            return response()->json(['message' => 'Ticket non trouvé'], 404);
        }

        return response()->json(['data' => $ticket], 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id): JsonResponse
    {
        $ticket = Ticket::find($id);

        if (!$ticket) {
            return response()->json(['message' => 'Ticket non trouvé'], 404);
        }

        $ticket->type = $request->get('type');
        $ticket->priority = $request->get('priority');
        $ticket->title = $request->get('title');
        $ticket->description = $request->get('description');
        $ticket->context = $request->get('context');
        $ticket->url = $request->get('url');
        $ticket->browser = $request->get('browser');
        $ticket->operating_system = $request->get('operating_system');
        $ticket->attachment = $request->get('attachment');

        $ticket->save();

        return response()->json(['data' => $ticket], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id): JsonResponse
    {
        $ticket = Ticket::find($id);

        if (!$ticket) {
            return response()->json(['message' => 'Ticket non trouvé'], 404);
        }

        $ticket->delete();

        return response()->json(['message' => 'Ticket supprimé avec succès'], 200);
    }
}
